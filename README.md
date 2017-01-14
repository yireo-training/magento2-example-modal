# MyModal module for Magento 2
This repository contains a Magento 2 module that illustrates the usage
of RequireJS and a simple JS component, that makes use of the Magento 2
modal widget.

## Installation
To install use the following composer command:

    composer require yireo/test-mymodal:dev-master

Next enable the module:

    bin/magento module:enable Yireo_MyModal
    bin/magento setup:upgrade

And flush the cache:

    bin/magento cache:clean

# Proof of concept
After installing the module, the main container should contain a button that pops up the modal.
