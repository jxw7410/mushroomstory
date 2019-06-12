//Always user model against the other object;
export const collisionDectection = (obj1, obj2) => {
    if (obj1.top() > obj2.bottom() || obj1.right() < obj2.left() || obj1.bottom() < obj2.top() || obj1.left() > obj2.right())
        return false;
    return true;
}

export const collisionDirection = (obj1, obj2) => {
    let vector_x = obj1.centerX() - obj2.centerX();
    let vector_y = obj1.centerY() - obj2.centerY();

    
}