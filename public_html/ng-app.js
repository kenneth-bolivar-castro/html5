/* 
 * Angular module for invoice app.
 */

angular.module('myApp', [])
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
        });
