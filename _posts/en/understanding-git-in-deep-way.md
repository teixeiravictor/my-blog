---
lang: en
title: "After all, how Git works?"
excerpt: "Let's understand what happens behind the scenes when we create a new branch and commit to it, for example."
createdAt: "2022-07-29"
tags:
  - git
categories: git
author: Victor Menezes
---

## Preface

The main goal of this post is to introduce the Git version control system. Throughout this document, we aim to provide a straightforward overview of the entire Git ecosystem. Understanding that when we clone a repository, the visible files in the main directory are merely a mirror of what is inside `.git/objects`. Knowing that Git is a graph database (more precisely, a [directed acyclic graph](https://git-scm.com/docs/gitglossary#gitglossary-aiddefDAGaDAG)). Therefore, understanding Git's inner workings will make its usage easier. And, of course, remember: a good developer always knows why they are doing something.

### How to Read This Post

There are several ways to read this document.

The first is to go directly to the chapters that interest you and skip the rest. All concepts were developed independently of each other, so a linear reading is not necessary.

The second, which I personally recommend and requires a bit more involvement, is to carefully read each chapter. Apply the concepts in practice. Pause and create small projects on your machine. In short, absorb the concepts. I guarantee this will be the best way to learn.

Additionally, at the end of this document, you will find several links to documentation, tools, and book recommendations to deepen your knowledge.

### How This Post is Organized

Each chapter can be read independently. The goal is to provide a simple and direct explanation of Git concepts. Feel free to read them from beginning to end or skip directly to the chapters you find most interesting.

The chapters are grouped into three sections. In the first, we take a deep dive into Git’s structure (**Understanding Git**), exploring its main components and their correlations. Alongside this, we will take a practical approach (**Using Git**) by covering the main commands, from the **Plumbing** commands, which we can consider the "low-level" part of Git, to its more abstract layer, the **Porcelain**, which operates at a "high level." 

We will also look at how to keep a repository clean (**Best Practices**). Finally, you will find supporting materials (**References**) in case you want to further deepen your knowledge on the subject.


## Understanding Git

### What is Git?

Git is a content management system. According to Linus Torvalds, the creator of Git:  
*"In many ways, you can just see Git as a filesystem—it is content-addressable and has some notion of version control, but I actually designed it with the problem of filesystem usage in mind, and I really have absolutely no interest in creating a traditional version control system."*¹  

While most version control systems store a new version of a project by saving the **diff** (a comparison of files that generates the differences between two versions), Git takes a different approach. When Git stores a new version of a project, it saves it as a new tree. If you need a **diff** between two versions, Git simply compares the two trees and generates a new diff between them.  

This fundamental difference makes Git easily distributable—it does not struggle with complex comparisons; instead, it simply transfers all the directories and contents that one user has and another is requesting.  

¹ Original available at: [http://marc.info/?l=linux-kernel&m=111314792424707](http://marc.info/?l=linux-kernel&m=111314792424707)

### Git Object Types

Git objects are the actual data in Git—the core elements that make up the repository. These are the files found in the hidden `.git` directory. The main directory is simply a mirror of these files.

There are four main types of objects in Git: **blob**, **tree**, **commit**, and **tag**.  
All these object types are stored in the Git object database, which is maintained in the hidden `.git` directory. Each object is compressed and referenced by a [SHA-1](http://en.wikipedia.org/wiki/SHA1) value, which consists of its content plus a small header containing metadata.  

A SHA-1 hash creates a fixed-length (40-character) identifier that uniquely represents a specific piece of content.  
Have you seen the commit ID displayed in the project history? That is simply a shortened version of the generated hash. It is what allows us to differentiate and track files.

Try this: open a versioned project and run the following command in your terminal:  
```bash
git show -s --format=%H
```

Then, compare the obtained value with the ID of your latest commit.

### Branching and Merging

Here we arrive at one of Git’s strongest features: **branches and merging**.  
This is a feature that truly set Git apart when it was first released, as the existing version control systems at the time (Subversion and CVS) did not offer this capability.

Branches are simply a way to create a separate line of development within your repository. Every time you make changes in your local repository, you will be working on a branch.  
By default, we start with the **master** branch, which serves as the main branch—like the trunk of a tree. This is a fundamental concept that allows for different workflows.  

In Git, creating a new branch is simply a matter of writing a file inside `.git/refs/heads`, which contains the SHA-1 of the latest commit for that branch.  

Creating a branch is nothing more than writing **40 characters** into a file.  
Switching to that branch means Git updates your working directory to reflect the tree pointed to by the SHA-1 and updates the `HEAD` file so that every commit from that point forward moves the branch pointer ahead.

To better visualize this concept, check out the following tool:  
[Visualizing Git](https://git-school.github.io/visualizing-git/).

Example of creating a new branch:

![Branch creation example](/assets/img/posts/understanding-git-in-deep/branchs.png)

## Using Git

### Getting Started

Start by visiting the [official website](https://git-scm.com/downloads) to download the Git installer. Choose the appropriate version for your operating system and proceed with the installation.

After that, open the terminal (if you are using Windows, use **Git Bash**) and enter the following command:

```bash 
git --version
``` 

If the Git version is displayed, it means your installation was successful.

### Initializing a Repository

Now, let's create our first Git repository. Open the terminal and navigate to your project directory by running:

```bash
cd /path/to/directory
```

With this done, you can initialize the repository by running the following command:

```bash
git init
```

This initializes the repository, enabling Git's features. Note that a `.git` directory now exists inside your project folder, storing all the tracking data for your repository (you may need to enable hidden files to see this folder).

After that, you need to set your name and email. These will be linked to every change you make.

To set a username:

```bash
git config --global user.name "My Name"
```

Para definir um e-mail:

```bash
git config --global user.email "my@email.com"
```

To display your configurations:

```bash
git config --list
```

If you want to display a specific configuration:

```bash
git config user.name
git config user.email
```

**Note:** If you want to use a different identity for a specific project, use the same command to set your email and name, but without the `--global` option.

### Workflow

The basic Git workflow is defined in three "stages":

- **Working Directory:** Modify files in your working directory.
- **Staging Area:** Perform a series of actions to be "committed." However, changes in the previous stage (working directory) will not be sent to the repository. Only the files that have been added and confirmed using the `git add` command will be staged. Once modified files reach this stage, they are prepared as a "snapshot" of your code in the staging area.
- **Repository:** A commit is executed, taking the files as they are in the staging area and storing them in your Git directory.

![Image showing workflow"](/assets/img/posts/understanding-git-in-deep/workflow.jpeg)

Additionally, each file can be in one of three possible "states":

- **Committed:** Changes that have not been modified since the last snapshot.
- **Modified:** Changes made to the files since the last committed snapshot.
- **Staged:** Changes that are marked to be added to the next snapshot via commit.

![Image showing file states"](/assets/img/posts/understanding-git-in-deep/stages.jpeg)

### Your Best Friend: git log

Whenever you want to view the timeline, see who made each commit, and other details, use the command:

```bash
git log
```

You will be able to see the entire project history using this command.

It will display the commit hash, author (with name and email), commit message, and timestamp.

If you want to view only the commit initials (hash and message), use the following command:

```bash
git log --oneline
```

Additionally, we can display all commits made across the project's branches by using: 

```bash
git log --oneline --all --graph 
```

But if you want to identify the branches, use this command:

```bash
git log --oneline --all --decorate --graph 
```

### Porcelain and Plumbing Commands

**Porcelain** and **Plumbing** are analogies used to differentiate **high-level** and **low-level** Git commands, respectively.  
Initially, Git used **Plumbing** commands, which were the first ones created by Linus Torvalds. These are typically used in tools and scripts.

Later, more user-friendly **Porcelain** commands were introduced by other Git maintainers, such as Junio Hamano.  
For further reading, I recommend checking out this StackOverflow thread: [Porcelain and Plumbing](https://stackoverflow.com/questions/6976473/what-does-the-term-porcelain-mean-in-git?noredirect=1&lq=1). Understanding these commands will help you become more familiar with their evolution.

Additionally, by running the command:__man git__, you can access all available commands.
The most commonly used commands can be found in the **"High-Level Commands (Porcelain)"** section.  
For Git's internal commands, refer to the **"Low-Level Commands (Plumbing)"** section.

Whenever you need to clarify a doubt or understand what a specific command does, use these guides as a quick reference.

## Best Practices

### One Small Feature per Commit

These are known as **"atomic commits."**  
Do not write vague commit messages like *hot fix* or *adjusted*. Your commit message should be as descriptive as possible.  
Remember, Git's primary function is to maintain an accurate record of the project's history, allowing you to go back in time and analyze how the code was at any given moment.

**Commit only specific files related to your changes**—do not commit all the files you modified throughout the week. Please, **do not do this!** Committing unrelated files clutters the repository and makes it harder to review the project history.

### I Made a Mistake in the Commit Message. How Do I Fix It?

Sometimes, due to urgency or carelessness, we end up committing with an incorrect message. Fixing this is quite simple, see below:

```bash
git commit -m "Wrong Message"
git commit -m "Right Message" --amend
```

If you forget to modify or add something to the file, you can easily fix it as well. See below:

```bash
touch file-test3.txt
git add .
git commit -m "Message Commit"
touch file-test4.txt
git add .
git commit -m "Message Commit"
git log
git reset --soft HEAD~3
```

### Conventional Commits

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is a standard for commit messages.  
It provides a set of rules for writing commit messages that are easy to read and understand.

Typically, it follows this format:

```bash
<type>(scope?): <description>
```

Each type is a structural element designed to communicate a specific intent in the commit.

There are types based on the [Angular convention](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum), which include:

> build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
Of course, nothing prevents you from creating your own types, but it's important that they make sense for your project.

## References

Here are some recommended materials for further learning. They are categorized into documentation and courses, including guides, books, and 

### Documentation and Guides

- [Git - Official Documentation](https://git-scm.com/doc);
- [Git Book](https://git-scm.com/book/en/v2) – The Git Bible, everything you need to know is here;
- [Atlassian Bitbucket Tutorial](https://www.atlassian.com/git/tutorials) – A compilation of various Git tutorials;
- [Flight Rules for Git](https://github.com/k88hudson/git-flight-rules) – The name says it all: basically a Git FAQ;
- [Learn Git Branching](https://learngitbranching.js.org/?locale=en_US) – A visual tool to help understand branching concepts;
- [Git Cheat Sheet](https://github.com/arslanbilal/git-cheat-sheet) – A compilation of Git commands;
- [Git Tips](https://github.com/git-tips/tips) – Useful tips for everyday use;
- [Git on VS Code](https://www.digitalocean.com/community/tutorials/how-to-use-git-integration-in-visual-studio-code) – How to integrate Git with VS Code;
- [Git School Dude](https://www.youtube.com/c/DanGitschoolDude) – A YouTube channel with excellent Git tutorials, covering everything from basics to advanced topics; and
- [Understanding Git](https://www.youtube.com/watch?v=6Czd1Yetaac) – A detailed video by Fabio Akita explaining Git usage in depth.