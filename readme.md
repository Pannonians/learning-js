
﻿**Shortcuts and Most used commands in Linux**


|**ctrl+alt+arrows**|change your currently active window/app (my keyboard is set to superkey (windows key) +tab)|
| :-: | :- |
|<p>**super+pageup/down (depends on linux version)**</p><p></p>|Move active window|
|**ctrl+alt+t**|open terminal|
|**Commands within Terminal in Linux**|
|**ctrl+shift+t**|open new tab within terminal|
|**alt+number**|switches between terminal tabs|
|**exit**|exit terminal|
|**xdg-open .**|opens a file or URL in the user's preferred application|
|**apt**|is a commandline package manager and provides commands for searching and managing as well as querring information about packages|
|**apt-update**|update application|
|**apt-cache search**|search for application|
|**apt install**|installation of application (you need to type which application you want to install)|
|**apt remove**|remove application (you need to type which application you want to remove)|
|**sudo**|Short for “SuperUser Do”, this command enables you to perform tasks that require administrative or root permissions.|
|**sudo su**|This command asks for the current user’s password as opposed to root.|
|**whoami**|displays the username currently in use.|
|**pwd**|use the pwd command to find out the path of the current working directory (folder) you are in.|
|**ls**|<p>is used to view the contents of a directory. By default, this command will display the contents of your current working directory.</p><p>`	`ls -R will list all the files in the sub-directories as well</p><p>`	`ls -a will show the hidden files</p><p>`	`ls -al will list the files and directories with detailed information like the permissions, size etc.</p>|
|**cd**|<p>to navigate through the Linux files and directories (it requres either the full path or the name of the directory, depending on the current working directory that you are in).</p><p>`	`cd .. move one directory up</p><p>`	`cd to go straight to the home folder</p><p>`	`cd- to move to your previous directory</p>|
|**cat**|(concatenate) it is used to list the contents of a file on the standard output. To run this command, type cat followed by the file's name and its extension. Example: cat file.txt|
|**cp**|<p>use this command to copy files from the current directory to a different directory.</p><p>for instance: cp scenery.jpg (from your current directory) into the Pictures directory.</p>|
|**mv**|primary use of this command is to move files, but it can be used to rename files. Arguments are similar to CP command. You need to type mv. the file's name, and the destionation's directory. Example: mv file.txt/home/username/Document|
|**mkdir**|Use mkdir command to make a new directory — if you type mkdir Music it will create a directory called Music|
|**touch**|The touch command allows you to create a blank new file through the Linux command line. As an example, enter touch /home/username/Documents/Web.html to create an HTML file entitled Web under the Documents directory.|
|**rm**|The rm command is used to delete directories and the contents within them. If you only want to delete the directory — as an alternative to rmdir — use rm -r.|
|**find**|using find searches for files and directories. As an example, find /home/ -name notes.txt command will search for a file called notes.txt within the home directory and its subdirectories.|
|**grep**|It lets you search through all the text in a given file. To illustrate, grep blue notepad.txt will search for the word blue in the notepad file. Lines that contain the searched word will be displayed fully.|
|**xargs**|The xargs command is used in a UNIX shell to convert input from standard input into arguments to a command. In other words, through the use of xargs the output of a command is used as the input of another command. We use a pipe ( | ) to pass the output to xargs|
|**curl**|curl is a command-line tool to transfer data to or from a server, using any of the supported protocols (HTTP, FTP, IMAP, POP3, SCP, SFTP, ...)|
|**wget**|you can download files from the internet with the help of the wget command. To do so, simply type wget followed by the download link.|
|**free**|<p>shows memory usage. </p><p>free -h shows memory usage in kb, mb, gb etc.</p>|
|**du**|<p>If you want to check how much space a file or a directory takes, the du (Disk Usage) command is the answer. However, the disk usage summary will show disk block numbers instead of the usual size format. </p><p>If you want to see it in bytes, kilobytes, and megabytes, add the -h argument to the command line.</p>|
|**> command**|Saves output in terminal as file|
|**chmod**|this command is used to change the read, write, and execute permissions of files and directories.|
|**top**|the top command will display a list of running processes and how much CPU each process uses.|
|**man**|displays the manual instructions of certain Linux commands.|

---------------
## Homework "Todo"
- Create an object generator for Todo instances
  - Accept a "title" argument
  - Always generate a todo with `completed: false` property 
- Prototype a function to switch todo
- Create 5 todo items in an array
- Print todos
- Switch 3rd and 4th todo to be completed
- Print todos
- Print only todos that are completed
- Print only todos that are not completed

```
function Todo(title) {
  this.title = title;
  this.completed = false;
}

Todo.prototype.toggleTodo = function () {
  this.completed = !this.completed;
};
```

--------------------

## Homework "Repo Explorer"

- Create a new file from where you'll run this app
- The app needs to find out people who performed commits on the repo
- The app needs to print out which person made how many commits on the repo
- Example:
```
    30  Petar Vukmanovic
    25  Nikolina Novakovic
    19  David Mandic
    12  Aleksandra Vukasinovic
     8  pvukmanovic-pannonians
     7  DavidMandic
```
- Use `chalk` npm package for some highlights and pretty colors
- An example of a node command that executes commands on bash:
```
const { exec } = require("child_process");

exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
```

## Homework "Smile!"

- Ensure you have installed at least Node.js v14.8 or higher
- Create a new workspace called "smile" for your individual folders
- Import library called "axios"
- Figure out how to perform "get" request using axios based on their documentation
- Fetch the data from this endpoint:
```
https://gist.githubusercontent.com/VPetar/e1cd462371d438ff863e09983072007b/raw/52087f314f4f763ae0a81fcb9f340bf0a1f2a41a/json
```
- Figure out how command line arguments work (process.argv)
- Be able to find a smiley based on keywords, and console log it's symbol
