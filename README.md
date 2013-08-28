# Octopress Menu Plugin

The menu plugin adds a dropdown menu to your Octopress blog. The current menu bar is one dimensional and is limited by its length. The menu bar plugin provides a way to fit more menu items. This plugin makes use of Jquery UI's menu widget with some custom CSS to fit with Octopress.

## Installation

There are 4 steps, copy the javascripts in, copy the stylesheets in, add the menu entries, finally generate the output.

### Copy the javascripts

Copy the javascipts from __js__ directory into your blog's javascript directories. There are 2 files.

#### Jquery UI

The file is called __jquery-ui-1.10.3.custom.min.js__. Copy this file to __source/javascripts/libs/__.

#### Menu

The file is called __menu.js__. Copy this file to __source/javascripts/__.

#### Adding to head

From __source/_includes/head.html__, add the following snippet in order to add your javascipt files.

``` html
<script src="{{ root_url }}/javascripts/libs/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script>
<script src="{{ root_url }}/javascripts/menu.min.js" type="text/javascript"></script>
```

Make sure these are included after the jquery is included.

### Copy the stylesheets

There is a SCSS file located under __css/_menu.scss__. Copy that file to __sass/custom/__.

### Add the menu entries

You need add the menu items. From __source/_includes/custom/navigation.html__, add the following snippet.

``` html
<li><a href="{{ root_url }}/">Blog</a>
  <ul>
    <li><a href="#">Item 3-1</a></li>
    <li><a href="#">Item 3-2</a></li>
    <li><a href="#">Item 3-3</a></li>
  </ul>
</li>
```

### Generate the output

Just do the usual to render the site.

```
rake generate
```

Your plugin should be installed.

## Theming

Currently the theme is based on the default Octopress theme.

If you wish to customize, fine the __Theming__ section and change the style of the menu item

```
/* Theming
----------------------------------*/
ul.main-navigation .ui-widget-content {
    border: 1px solid #dddddd;
    background: #ebebeb;
    z-index: 1;
}
```

## License

MIT License. See LICENSE for more details.

Copyright(c) 2013 Wong Liang Zan(zan@liangzan.net)
