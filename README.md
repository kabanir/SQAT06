# SQAT06 - Assignment-1
Assignment 1-SQAT06
GUIDELINE FOR AUTOMATION TESTING:
1.To test web application called, “FIGURE1” to verify this application for registration page by using automation test tool called “SELENIUM”

2.Registration form will be available at URL:https://app.figure1.com/account/register'

3.Following are the tools going to be used for testing and also download on your local computer:

1) Visual Studio Code: Visual Studio Code - Open Source. VS Code is a new type of tool that           combines the simplicity of a code editor with what developers need for their core              edit-build-debug cycle. Code provides comprehensive editing and debugging support, an extensibility model, and lightweight integration with existing tools.

Download and install on your computer.

Open folder under SQAT06 file, that have all packages installed (node_modules, mobile_basic.js, Readme.md, web_basic.js)

To run the JavaScript at command prompt enter: node web_basic.js, to make sure the codes are running ok.

2) Node.JS: Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side.
Download version-7.8.0, to confirm if it’s installed successfully, go to command prompt and enter- (node –v)

3) NPM: installed npm at command prompt under SQAT06 drive for the first time.

4) Selenium Standalone server to download: at url: https://www.npmjs.com/package/selenium-server-standalone
Selenium standalone as npm package. The version of npm package matches packaged selenium version.

At command prompt enter: 

1)npm install selenium-standalone –g (globally)
2)selenium-standalone install
3)selenium-standalone start 

To start testing or to run codes in JavaScripts make sure on command prompt start selenium-standalone npm.

5) Git: Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. 

Download from URL: https://git-scm.com/downloads,

To confirm if it’s installed successfully, go to command prompt and enter- (git --version)

6) Github: GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team repositories, we're your all-in-one platform for collaborative development.

1-Register and login into Github, search the name IzzatBamieh, click user link and under his name find SQAT06 folder. 

2-Click on Clone or download to clone URL, copy and paste the web url to command prompt-"git .clone http://github.com/IzzatBamieh/SQAT06.git" cloned successfully.

3-To change the drive go to command prompt, enter (cd (drive name) SQAT06), enter (dir) to make sure all files download successfully.

4-To upload the code into Github from IzzatBamieh file to our own folder-click "FORK" then system is navigating to window under your name.

5-Click on clone link, copy and paste that link to command prompt: enter: git remote add (your name) and paste clone link, it will add files under your name.

6-After that enter at command prompt: git remote –v, now it will bring fetch and push the updated code, which is connected to your local files from the origin. At this stage at command prompt you will able to see two codes, one under your name (Fetch and Push) and second one under origin (Fetch and push)

7-Enter on command prompt: git add –p, will show your name in red, and ask to make changes, say “Y” for yes and “N” for no.

8-Enter on command prompt: git commit -m"my first commit"(first file name in github) (message to show up)

9-Enter on command prompt: git push ruby master, it will push all codes to my repository folder. After that you will able to see all codes entered in your folder.

10-Pull request: To share any file or upload into Github: Click on New pull request under your github account and it will copy all your codes.

Assignment 2- Readme.md

Following are the steps to work in Cucumber

1-Cucumber uses plain commads to execute a test

2-Cucumber required following files to run the test and all files works together (Steps.js, World.js, and Hooks.js)

1)	Scenario.feature file:In this file we should use simple and basic English instructions, like (Given-how to start, When-when to start and Then). In this file cucumber execute the commads step by step, before the execution of the test, scenario.feature file must have (Given, When and Then) steps. Without these steps test will not run successfully.

2)	Steps.js file: This file have all test scripts which have been mentioned in Scenario.feature file. To run your test successfully execute each step one by one.

3)	World.js file: This is the toolbox where we can use multiple tools/website to define the function.It will help to test multiple scenarios. Cucumber automatically run world.js and make it ready to use.

4)	Hooks.js file: Hooks is basically run before and after each scenario.

Once all codes has been written and now its ready to execute, on commad prompt type: .\node_modules.bin\cucumber-js.

Cucumber will run all feature files that are available in the VS folder.

If all codes run successfully you will be able to see the result. Either pass or failed. 

To see the result in html file, we have to create a new folder called ”test”

inside the test folder create subfolder called “ report”

 inside the report folder create a file called “cucumber_report.json”. 

After that go to the command prompt, installed- “cucumber-html-report by entering –npm install cucumber-html-report.

At command prompt enter: 

.\node_modules.bin\cucumber-js - f json:test/report/cucumber_report.json, this file add in json file report.

To view the html file and see the result in proper pie chart form. 

Go to commad prompt enter: node index.js. 

Cucumber html report runs successfully and you will be able to view the report.

