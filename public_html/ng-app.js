/* 
 * Angular module for my app.
 */

angular.module('myApp', ['finance'])
        .controller('InvoiceController', function() {
            this.quantity = 1;
            this.cost = 2;
            this.inCurr = 'EUR';
            this.currencies = ['USD', 'EUR', 'CNY'];
            this.usdToForeignRates = {
                USD: 1,
                EUR: 0.74,
                CNY: 6.09
            };

            this.total = function(outCurr) {
                var amount = this.quantity * this.cost;
                return this.convertCurrency(amount, this.inCurr, outCurr);
            };
            this.convertCurrency = function(amount, inCurr, outCurr) {
                var outForeingCurr = this.usdToForeignRates[outCurr],
                        inForeingCurr = this.usdToForeignRates[inCurr];
                return ((amount * outForeingCurr) / inForeingCurr);
            };
            this.pay = function() {
                window.alert('Paid!');
            };
        })
        .controller('InvoiceImproveCtrl', ['currencyConverter', function(currencyConverter) {
                this.quantity = 1;
                this.cost = 2;
                this.inCurr = 'EUR';
                this.currencies = currencyConverter.currencies;

                this.total = function total(outCurr) {
                    return currencyConverter.convert(this.quantity * this.cost, this.inCurr, outCurr);
                };
                this.pay = function pay() {
                    window.alert("Thanks!");
                };
            }])
        .controller('InvoiceImproveCtrlHttp', ['currencyConverterHttp', function(currencyConverter) {
                this.quantity = 1;
                this.cost = 2;
                this.inCurr = 'EUR';
                this.currencies = currencyConverter.currencies;

                this.total = function total(outCurr) {
                    return currencyConverter.convert(this.quantity * this.cost, this.inCurr, outCurr);
                };
                this.pay = function pay() {
                    window.alert("Thanks!");
                };
            }]);
