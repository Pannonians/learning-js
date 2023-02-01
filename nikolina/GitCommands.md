## Git Version Control && SSH
=============================

# Generate SSH key:

    > d ~/.ssh/ && ssh-keygen -t ed25519 -C "your_email@example.com"

# Update config file from ~/.ssh folder

 - if config fie doesn't exist, create one
 - add this to config file:
    
    > Host <name>.github.com
    > HostName github.com
    > User git
    > IdentityFile ~/.ssh/github_ubuntu
    > IdentitiesOnly yes

   * Add the .pub file to GitHub under SSH & GPG keys credentials option
   * Clone project: git clone git@<ime>.github.com:Pannonians/learning-js.git
  
|**Git Commands**|description|
|--|--|
|**Git Init**|creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository.|
|**Git Config user.name "<name>"**|setting up your global username|
|**Git Config user.email "<email>**|setting up your global email|
|**Git log**|shows a list of all the commits made to a repository.|
|**Git log --pretty**| shows a list of all the commits made to a repository while beeing able to define additional formats by setting a pretty. example: oneline <hash> <title-line>|
|**Git status**|displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't and which files aren't being tracked by Git.|
|**Git add**|adds a change in  the working directory to the staging area.|
|**Git add .**|stage all files (that are not listed in the .gitignore) in the entire repository.|
|**Git rm**|remove files matching pathspec from the index, or from the working tree and the index. git rm will not remove a file from just your working directory.|
|**Git reset HEAD**|to hard reset files to HEAD on Git, use this command. The purpose of the git reset is to move the current HEAD to the commit specified (in this case, the HEAD itself, one commit before HEAD and so on).|
|**Git reset <file>**|Remove the specified file from the staging area, but leave the working directory unchanged.|
|**Git reset**|move the current branch tip backward to commit, reset the staging area to match, but leave the working directory alone.|
|**Git commit -m**|command that immediately creates a commit with a passed commit message. Passing the -m option will forgo the text editor prompt in-favour of an inline message.|
|**Git commit -a**|commit a snapshot of all changes in the working directory.
|**Git commit**|commit the staged snapshot. This will launch a text editor prompting you for a commit message. After you've entered a message, save the file and close the editor to create the actual commit.|
|**Git commit -am**|a power user shortcut command that combines the -a and -m options. This combination immediately creates a commit of all the staged changes and takes an inline commit message.|
|**Git diff**|diffing is a function that takes two input data sets and outputs the changes between them.|
|**Git diff HEAD ./path/to/file**|this example will compare the specific changes in the working directory, against the index, showing the changes that are not staged yet.|
|**Git checkout <branchname>**| switch to written branch name|
|**Git checkout -b <branchname>**| create a new branch with specified branchname|
|**Git clean -df**|removing untracked_dir|
|**Git push**|is used to upload local repository content to a remote repository.|
|**Git pull**|is used to fetch and download content from a remote repository and immediately update the local repository to match that content.|
|**Git fetch**|is used to download contents from a remote repository.|
|**Git merge**|is a way of putting a forked history back together again. Git push is mostly used instead of merge.|
|**Git rebase**|is the process of moving or combining a sequence of commits to a new base commit.|
|**Git branch**|lets you create, list, rename and delete branches.|

