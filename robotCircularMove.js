function isRobotMoveCircular(arr) {
    // let N = 0,
    //     E = 1,
    //     S = 2,
    //     W = 3;
    let x = 0, y = 0, dir = '0';
    for (let i = 0; arr[i]; i++) {
        let move = arr[i];
        switch (move) {
            case 'R': {
                dir = '' + (dir + 1) % 4;
                break;
            }
            case 'L': {
                dir = '' + (3 + dir) % 4;
                break;
            }
            case 'G': {
                switch (dir) {
                    case '0': {
                        y++;
                        break;
                    }
                    case '1': {
                        x++;
                        break;
                    }
                    case '2': {
                        y--;
                        break;
                    }
                    case '3': {
                        x--;
                        break;
                    }
                }
                break;
            }
            default: console.log("");
        }
    }
    return x == 0 && y == 0;
}
console.log(isRobotMoveCircular(['G','L','G','L','G','L','G']))