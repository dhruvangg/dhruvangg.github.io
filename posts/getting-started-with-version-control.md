---
title: Getting Started with Version Control
tags: ["git", "featured"]
exceprt: Unlock the power of version control systems, mastering the basics to streamline collaboration and safeguard your projects from code chaos.
featuredImg: getting-started-with-version-control.png
date: 2022-04-07 05:30:00
---

The Software engineering is a constantly changing field. When it comes to coding, there is no final version. All applications and codes are always continuous development. 
Project Versions
Have you ever named your project like this? It is very frustrating when you need to merge the code.
To get rid of this problem, Version control system have been introduced. A version control system is a kind of software that helps the developer to communicate and manage all the changes efficiently. There are multiple version control system available like Git, SVN, etc. But Git is well known and commonly used version control system.
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
Get started with Git
First of all you have to download Git on your system from the official website. Once you install git on your system, you can use it in multiple ways
Before going further let's check git have been installed properly or not by checking git version.
 git --version 
Now create/open your project folder in terminal or git bash and initialize git by running following code.
 git init 
This command will create hidden folder called .git which will used for version control. Just ignore this folder as of now and start creating project related files. I have created index.html in my project folder.
Let's check status of the project with git by running following command.
 git status 
It will show me following response
 On branch master

  Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
      modified:   index.html
  
  no changes added to commit (use "git add" and/or "git commit -a") 
That means there is a file found "index.html" is modified. Now I will add this file into git by running following command. Git add [filename] selects that file, and moves it to the staging area, marking it for inclusion in the next commit.
 git add index.html 
Instead of writing file name, you can use . or star for multiple files. After adding file, I will again check git status, this time it respond with following output
 On branch main
  
  No commits yet
  
  Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
      new file:   index.html 
Now its time to commit our changes using commit command. The git commit command captures a snapshot of the project's currently staged changes.
 git commit -m "Added My First File" 
and It will show following response
 [main (root-commit) e78053e] Added My First File

  1 file changed, 0 insertions(+), 0 deletions(-)

  create mode 100604 index.html 
Now Our code have been staged but we also have to store on centralize platform where others can access it too. There are multiple centralize platform available for git but today we would use GitHub. I already have an account in GitHub, you can create new one for free. Now login into you GitHub account and create new repository for your project as shown in screenshot below. 
No alt text provided for this image
Once you create new repository, you would get suggestion to setup remote repository for you local project. You can check it for your reference or skip to the following instruction to setup. 
Let's setup remote repository with local project by following command.
 git remote add <shortname> <remoteurl> 
For my case, it would be,
 git remote add origin https://github.com/dhruvangg/sample.git 
We have added remote repository successfully with our local project. Now It's time to upload local code to newly created repository. 
The git push command is used to upload local repository content to a remote repository.
 git push <shortname> <branchname> 
I will cover branching in git in upcoming post but till the time you can use master branch as default branch of Git/GitHub. 
In my case push command will be,
 git push origin master 
Now check your GitHub repository, you can have been uploaded on it.
Hurry...! We have successfully added our code on GitHub using Git. That's all for this blog, If you have any doubts and queries, You can reach out to me via LinkedIn or email (dhruvangg@gmail.com)