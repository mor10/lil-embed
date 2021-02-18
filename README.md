# LinkedIn Learning Embed Block for WordPress

![Version 0.1.1](https://img.shields.io/badge/version-0.1.0-blue.svg)

Unofficial embed block for WordPress to simplify embedding of LinkedIn Learning videos.

## Changelog

### 0.1.1

- Update wrapper classname to `.lil-embed-container` to avoid conflict.
- Update all packages.

## Installing

1. Download zip archive.
2. In WordPress admin, go to Plugins -> Add New.
3. Click "Upload Plugin."
4. Upload zip archive.
5. Activate plugin

## Video demo

[![Using the lil-embed plugin to add a LinkedIn Learning embed block to WordPress](http://img.youtube.com/vi/xDPT-vIFMYs/0.jpg)](http://www.youtube.com/watch?v=xDPT-vIFMYs)

## Usage

The LinkedIn Learning Embed Block appears as a regular block under the "Embeds" section in the block selector.

To add a new LinkedIn Learning embed block in a post or page, go to the block editor, then either:

- click the + symbol, scroll to the "Embeds" section, and select "LinkedIn Learning,
- click the + symbol and type in "LinkedIn" to reveal the block,
- from a new paragraph block, type "/LinkedIn" to reveal the block.

Once a block is added, paste the **full** embed code from the LinkedIn movie you wish to share. The block will parse the code and display the embed in the editor.

You can choose whether to display the movie, course, and instructor links under the embed by toggling the option in the Block panel on the right when the block is in focus.

To change the embedded movie, remove the block and add a new one.

## Contributions welcome

If you find a bug, have a feature request, or want to improve this plugin, add an issue or submit a pull request.

## Todo

- Add PostCSS processing for CSS.
- Place CSS files in `/build` folder on build.
