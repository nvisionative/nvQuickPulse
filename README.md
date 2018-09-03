# nvQuickPulse

![nvQuickPulse](https://user-images.githubusercontent.com/4568451/45002823-fedc0a00-afa8-11e8-9d2a-d57d300b746c.png)

We 💙  DNN

Let's face it, sometimes it's just hard to keep up with everything that is going on.  Within each and every DNN Community member, there is a unique and valued talent waiting to be discovered and shared.  DNN Platform (formerly DotNetNuke) is known for being a powerful framework that can be extended in so many ways.

Discover 💙 

Quickly check the pulse of the DNN Open Source Community.  This app utilizes the GitHub API to access valuable information about DNN related repositories and their activity.  View statistics that are not even viewable via the GitHub website!

Search and explore projects that otherwise would be very hard to find.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Pages](#pages)
3. [Providers](#providers)
4. [i18n](#i18n) (adding languages)

## <a name="getting-started"></a>Getting Started

We hope you are enjoying this mobile app as it is, but we are hoping you will help
improve it! What is your experience? Do you have ideas for improvement? If so, 
[let us know](https://github.com/nvisionative/nvQuickPulse/issues/new).

Do you speak another language? Well, perhaps you can help! This app already has 
built in support for [internationalization](#i18n) and your translation 
contributions would help the app experience for the global DNN Community!

## <a name="pages"></a>Pages

The app loads with the `FirstRunPage` set to `IntroPage` as the default. If
the user has already gone through this page once, it will be skipped the next
time they load the app.

If the intro is skipped, the Welcome page will be displayed which is a "splash" 
prompting the user to discover or explore.

Once the user is authenticated, the app will load with the `MainPage` which is
set to be the `ReposPage` as the default.

For future consideration, there are placeholder pages for login, signup, settings, and tabs. 

The entry and main pages can be configured easily by updating the corresponding
variables in
[src/pages/index.ts](https://github.com/nvisionative/nvQuickPulse/src/pages/index.ts).

Please read the
[Pages](https://github.com/nvisionative/nvQuickPulse/src/pages)
readme, and the readme for each page in the source for more documentation on each.

## <a name="providers"></a>Providers

nvQuickPulse comes with some basic implementations of common providers.

### User

The `User` provider is used to authenticate users through its
`login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST`
requests to an API endpoint that will need to configured for potential future 
use.

### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of
your API url in the Api class and call get/post/put/patch/delete 

## <a name="i18n"></a>i18n

nvQuickPulse comes with internationalization (i18n) out of the box with
[ngx-translate](https://github.com/ngx-translate/core). This makes it easy to
change the text used in the app by modifying only one file. 

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/etc.).