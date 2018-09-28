function printMatrixText(matrix, seletedY, seletedX, isStrings=true) {
    var text = "let matrix = [ <br>";
    for (var y = 0; y < matrix.length; y++) {
        text += "&nbsp&nbsp&nbsp&nbsp&nbsp[";
        for (var x = 0; x < matrix[0].length; x++) {
            if(isStrings){
                if (y == seletedY && x == seletedX) {
                    text += '<span style="color:yellow" id="' + y + "_" + x + '">"' + matrix[y][x] + '"</span>'
                }
                else {
                    text += '<span style="color:white" id="' + y + "_" + x + '">"' + matrix[y][x] + '"</span>'
                }
            }
            else{
                if (y == seletedY && x == seletedX) {
                    text += '<span style="color:yellow" id="' + y + "_" + x + '">' + matrix[y][x] + '</span>'
                }
                else {
                    text += '<span style="color:white" id="' + y + "_" + x + '">' + matrix[y][x] + '</span>'
                }
    
            }

            if (x < matrix[0].length - 1) {
                text += ',';
            }
        }
        text += "]";
        if (y < matrix.length - 1) {
            text += ",<br>";
        }
    }

    text += "<br>]";
    return text;

}


function fillMatrix(dim) {
    let matrix = new Array(dim).fill([]);
    for (var i = 0; i < dim; i++) {
        var row = new Array(dim).fill("#fff");
        matrix[i] = row;
    }
    return matrix;
}


function setPixelColor(x, y, clr) {
    var indx = getIndexByCoords(x, y);
    matrix[indx.indY][indx.indX] = clr;
}


function getIndexByCoords(x, y) {
    return {
        indY: floor(y / pixelSize),
        indX: floor(x / pixelSize)
    }
}

function isInGrid(x, y) {
    return y < pixelSize * dim && x < pixelSize * dim && y >= 0 && x >= 0;
}


function isInPalette(x, y) {
    return x > pixelSize * dim && x < pixelSize * dim + pixelSize && y < pixelSize * dim && y >= 0;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function copyMatrixByValue(matrix) {
    var newMatrix = JSON.parse(JSON.stringify(matrix));
    return newMatrix;
}