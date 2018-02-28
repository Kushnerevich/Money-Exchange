// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var o = new Object();
    if (currency > 10000 ) {
        o.error = "You are rich, my friend! We don't have so much coins for exchange";
    }
    else {
        H = div(currency, 50);
        Q = div((currency % 50),25);
        D = div((currency % 50)%25,10);
        N = div(((currency % 50)%25)%10,5);
        P = div((((currency % 50)%25)%10)%5,1);

        if (H>0){
            o.H = H;
        }
        if(Q>0){
            o.Q = Q;
        }
        if(D > 0){
            o.D = D;
        }
        if(N > 0){
            o.N = N;
        }
        if(P > 0){
            o.P = P;
        }
    }
    return o;
}

function div(val, by){
    return (val - val % by) / by;
}