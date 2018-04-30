# THETA Plug-in Community Guide

## Fast Viewing Docs for Review

You can view the MarkDown docs directly on GitHub in a web browser. The images and formatting will be automatically displayed by GitHub.

- [SDK Setup](docs/index.md)
- [Using the Plug-in](docs/use.md)
- [Custom Development](docs/custom.md)
- [Plug-in Ideas](docs/concept.md)
- [API Quick Reference](docs/api.md)

## Status

As of April 5, 2018, this guide needs to be updated for the new API and SDK

## Building the HTML from MarkDown

- install [MkDocs](http://www.mkdocs.org/)
- install material theme `pip install mkdocs-material`

Create HTML from MarkDown

    $ mkdocs build

## Ediing Documents
Edit the `*.md` files in `./docs/` only.  Do not edit the HTML files in `./site`. The HTML files will be
overwritten by `mkdocs build`.

Workflow to edit docs and view from local server

    $ mkdocs serve


## Theme
We are using a modified Material Design theme.  Another theme can be specified
in `mkdocs.yml`.
