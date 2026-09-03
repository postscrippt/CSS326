function countdown(n) {
    let t = n;
    const timer = setInterval(() => {
        console.log(t);
        t--;
        if (t < 1) {
            clearInterval(timer); console.log("Liftoff!");
        }
    }, 1000)
}

countdown(5);

