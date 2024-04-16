# Anonymous-dp V2

![cover picture](./assets/cover.jpg)

## Anonymous-dp updated !

> preview features : https://rizmyabdulla.github.io/Anonymous-dp/index.html

#### Many <span style="background-color:red;border-radius:5px;padding:2px;font-weight:bold;">new</span> features are unlocked in this version.

### features

- Obtaining the initial letters from the user's first name and last name and drawing them at the center of the display picture (DP).

- Applying any color to the initial letters.

- The initial letters also automatically adjust their color based on the background, using complementary function.

- Adjustable font size of initial letters.

- Adjustable font color of initial letters.

- Random Colors for DP and initial letters in mode 3.

| Features                     | Mode-1  | Mode-2  | Mode-3  |
| ---------------------------- | ------- | ------- | ------- |
| Background Pattern           | &#9745; | &#9745; | &#9746; |
| Initial letters              | &#9746; | &#9745; | &#9746; |
| background solid color       | &#9746; | &#9746; | &#9745; |
| random profile picture Color | &#9746; | &#9746; | &#9745; |
| random letter Color          | &#9746; | &#9745; | &#9745; |
| complementary letter color   | &#9746; | &#9745; | &#9745; |
| manual letter color          | &#9746; | &#9745; | &#9745; |

## docs

The following documentation provides a comprehensive guide on how to customize and personalize a user's profile, including generating a display picture (DP), changing text, and adjusting colors using JavaScript. This documentation is intended for developers and users interested in implementing profile customization features.

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Initialization](#initialization)
4. [Profile Customization](#profile-customization)
   - [Mode 1 - Random Color Pattern](#mode-1-random-color-pattern)
   - [Mode 2 - Initials](#mode-2-initials)
   - [Mode 3 - Colored Background and Initials](#mode-3-colored-background-and-initials)
5. [Events and Interactions](#events-and-interactions)
   - [Generate and Save Display Picture](#generate-and-save-display-picture)
   - [Color Picker](#color-picker)
   - [Name Change](#name-change)
6. [Canvas Modes](#canvas-modes)
7. [Customization Functions](#customization-functions)

## Introduction

This documentation explains how to create a user profile customization system that allows users to personalize their profile pictures, text, and colors. The system is built using JavaScript and HTML5 Canvas for creating dynamic display pictures.

## Prerequisites

Before you implement the profile customization features, ensure you have the following elements in your HTML:

- `profile-name`: The element that displays the user's name.
- `profile-color-picker`: An input element for selecting text color.
- `profile-generate-dp`: A button for generating the display picture.
- `profile-save-dp`: A button for saving the display picture.
- `profile-cname-btn`: A button to change the name.
- `profile-name-submit`: A button to submit the changed name.
- `profile-picture`: The HTML5 canvas element for rendering the display picture.
- `profile-fname-input`: An input element for the first name.
- `profile-lname-input`: An input element for the last name.
- `profile-font-color-xxx`: CSS classes for specifying custom font color.
- `profile-font-complementary`: CSS class for complementary font color.
- `profile-random-font-color`: CSS class for random font color.
- `profile-font-size-xx`: CSS classes for specifying custom font size.
- `profile-dp-color-xxx`: CSS classes for specifying custom display picture background color.
- `profile-random-dp-color`: CSS class for random display picture background color.

## Initialization

The profile customization system is initialized when the DOM is ready. To ensure this, an event listener is added for the `DOMContentLoaded` event. The system retrieves necessary DOM elements and initializes the HTML5 canvas.

## Profile Customization

### Mode 1 - Random Color Pattern

In Mode 1, a random color pattern is generated and displayed on the canvas. The user's name is not used in this mode. To create a random color pattern, the system generates random colors and fills the canvas with rectangles of random colors.

### Mode 2 - Initials

In Mode 2, the user's initials are displayed on the canvas. The system generates a random color pattern as a background and sets the font color based on the selected color or other customization options.

### Mode 3 - Colored Background and Initials

Mode 3 combines a colored background with user initials. The background color and font color can be customized based on user preferences.

## Events and Interactions

### Generate and Save Display Picture

Users can generate and save their display pictures by clicking the "Generate DP" and "Save DP" buttons, respectively. The system generates the DP on the canvas and allows users to save it as an image.

### Color Picker

Users can select a custom text color using the color picker input. The text color is applied to the user's name and initials.

### Name Change

Users can change their displayed name by clicking the "Change Name" button. They can input their first and last names and submit the changes by clicking the "Submit" button.

## Canvas Modes

The profile customization system supports three canvas modes: Mode 1, Mode 2, and Mode 3. Each mode provides different customization options. To change the canvas mode, add a class to the canvas element. The class names are "mode-1," "mode-2," and "mode-3."

## Customization Functions

The system includes various functions for customization, such as generating random colors and calculating complementary colors for text. These functions enable dynamic display picture creation based on user preferences.

For specific implementation details and usage examples, please refer to the code comments and the HTML structure of your project.


## <span id="dev-note">Developer Note</span>

#### If you find this project useful or interesting, please consider giving it a star on GitHub by clicking the Star button at the top. Your support is greatly appreciated! &#10084;

#### Contributions are welcome! If you find any bugs or want to improve the project, please open an issue or submit a pull request. Make sure to follow the contribution guidelines mentioned in the repository.

