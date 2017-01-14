define([
        "jquery", "Magento_Ui/js/modal/modal"
    ], function($){
        MyModal = {
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
            mymodal: MyModal.initModal
        };
    }
);