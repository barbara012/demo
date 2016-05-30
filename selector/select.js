var Selector = {
    init: function () {
        var that = this;
        this.$dropdowns = $('.dropdown-wrapper');
        this.$dropdowns.each(function() {
            var $this = $(this);
            //绑定点击事件
            that.bindEvent($this);

            //绑定选值操作事件
            that.selectHandle($this);
        });

        //点击页面其他地方隐藏列表
        $(document).click(function() {
            that.hide(that.$dropdowns);
        });
    },
    bindEvent: function($trigger) {
        var that = this;
        $trigger.click(function() {
            var $this = $(this);
            if ($this.hasClass('show')) {
                that.hide($this);
            } else {
                that.show($this);
            }
            return false;
        });
    },
    selectHandle: function($trigger) {
        var that = this;
        $trigger.find('.dropdown__option').click(function() {
            that.setValue($trigger, $(this).text());
            return false;
        });
    },
    setValue: function($trigger, value) {
        $trigger.find('.dropdown__text').text(value);
        this.hide($trigger);
    },
    show: function($trigger) {
        $trigger.addClass('show');
    },
    hide: function($trigger) {
        $trigger.removeClass('show');
    }
};