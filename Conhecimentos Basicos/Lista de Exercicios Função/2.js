function classificarTriangulo(l1, l2, l3){
    if(l1 == l2 && l2 == l3){
        console.log("Triângulo Equilátero")
    } else if(l1 != l2 && l2 != l3){
        console.log("Triângulo Escaleno")
    }else{
        console.log("Triângulo Isósceles")
    }
    
}

classificarTriangulo(2, 2, 2)
classificarTriangulo(2, 3, 3)
classificarTriangulo(2, 3, 4)
