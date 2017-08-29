define([
        "jquery", "Magento_Ui/js/modal/modal"
    ], function($){
        var ExampleModal = {
            initModal: function(config, element) {
                $target = $(config.target);
                $target.modal();
                $element = $(element);
                $element.click(function() {
                    $target.modal('openModal');
                });
            }
        };

        return {
            'example-modal': ExampleModal.initModal
        };
    }
);
