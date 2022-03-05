const baperTaka = 100000;
function patrichai(age, earning) {
    // console.log(trueAge);
    var decision = canMarry(15000);
    console.log(decision);
    console.log(age);
    console.log(earning);
    const trueAge = age + 7;
    function canMarry(expense) {
        const remaining = baperTaka + earning - expense;
        if (remaining > 1000) {
            const showing = 500;
            console.log(showing);
            return true;
        }
        return false;
    }
};

patrichai(21, 50000);