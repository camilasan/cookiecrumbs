
CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Installation


INTRODUCTION
------------

Current Maintainer: Troels Lenda <troelslenda@gmail.com

There's a lot of breadcrumb modules out there, but none of them build
true breadcrumbs.

Cookie Crumbs, makes use of cookies (hence the name), to provide
history based breadcrumbs, and not the hierarchical standard ones.

The breadcrumbs are provided through a block with the option to configure how
deep the breadcrumb trail should be. The library, exposed in the block will
append the title of the current page to an unordered list and keep track of
them with cookies.

INSTALLATION
------------

Install the module like with other modules. It depends on Libraries API
and a library called henselsrevenge.
Place jquery.hanselsrevenge.js in sites/all/libraries/hanselsrevenge.
You can download the library from https://github.com/soitgoes/hanselsrevenge
Once the module is installed and library downloaded, you can visit
admin/reports/status on your site, to see whether the library is placed
properly or not.
