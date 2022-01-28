# SmartCarbon
![SmartCarbon image](https://raw.githubusercontent.com/hammoudiproject/SmartCarbon/main/app/www/img/logo-title.png)

## Introduction
The project is an application aiming at calculating the carbon footprint of the users with a system of questions/answers, and to be able to compare the results between all the users.
The application is directly link to a remote MySQL database hosted on the web.


## Team
### Project Supervisor:
- Karim Hammoudi, Université de Haute-Alsace, IRIMAS, karim.hammoudi@uha.fr

### Project Developers:
- Vincent Seyller ([portfolio](https://seyller-vincent.com/)), Université de Haute-Alsace, M1 IM, vseyller@laposte.net 
- Bryan Dallest ([github](https://github.com/DLTBryan)), Université de Haute-Alsace, M1 IM, bryan.dallest@gmail.com
- Yannick Amoa, Université de Haute-Alsace, M1 IM, yannick.amoa@uha.fr

### Conceptors:
- Dawid Baraniak, Université de Haute-Alsace, M1 IM, [website](https://chipmnk.dev/)
- Xavier Scherrer, Université de Haute-Alsace, M1 IM

### Contributors:
- Alexandre Bianchi
- Clément Stutz
- Younes Beaila
- Nboumbe Sow

## Installation
This project was made with Cordova, which installs as follows (procedure for Windows 10):
- Install Gradle via this link (v7.3.3) : https://gradle.org/releases/
- Add the environment variable GRADLE_HOME on the installation folder 
- Install jdk1.8.0_202 via this link : https://www.oracle.com/fr/java/technologies/javase/javase8-archive-downloads.html
- Add the environment variable JAVA_HOME on the installation folder
- Add the environment variable _JAVA_OPTIONS with the value -Xmx512M
- Install Android Studio (not necessary if you have the latest version)
- Create a new project (to be deleted later)
- Go to Tools/SDK Manager
- Change the location for an android-sdk folder
- Tick :
  - In SDK Platforms : Android API 32, Android 12, Android 11, Android 8
  - In SDK Tools (tick in "Show packages details") : Android SDK Build-Tools 31, 30.0.3 et 30.0.2; Android Emulator; Android SDK Platform-Tools
- Install NodeJS
- Add the environment variable ANDROID_SDK_ROOT on the android-sdk folder
- Add to path :
  - %JAVA_HOME%\bin
  - %ANDROID_SDK_ROOT%\
  - %ANDROID_HOME%\emulator
  - %ANDROID_HOME%\platform-tools
  - %ANDROID_HOME%\tools\bin
  - %GRADLE_HOME%\bin
  - "Your NodeJS install folder"


## Acknowledgements
The authors would like to thank:
- Dawid Baraniak (conceptor), a Master's student, for showing us the Cordova framework and
  for hosting the application's database
  
  
## Application's context
Project done in the context of the course "Agile Methods" of the M1 IM/MIAGE of the University of Haute-Alsace.
The goal was to develop a working mobile application for calculating the carbon footprint of a user.
The application was developped in one sprint of 2 weeks including stages of design, development and tests through an agile development cycle.
 
 

