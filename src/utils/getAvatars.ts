//takes the fitst name of author and retuns a mock Avatar for the author
export const getAvatarPath = (letter:string) =>{
    
    let avatarPath;
    switch (letter.toLowerCase()) {
        case 'a':
            avatarPath = '/avatar/a.jpg';
            break;
        case 'b':
            avatarPath = '/avatar/b.jpg';
            break;
        case 'c':
            avatarPath = '/avatar/c.png';
            break;
        case 'd':
            avatarPath = '/avatar/d.jpg';
            break;
        case 'e':
            avatarPath = '/avatar/e.jpg';
            break;
        case 'f':
            avatarPath = '/avatar/f.jpg';
            break;
        case 'g':
            avatarPath = '/avatar/g.jpg';
            break;
        case 'h':
            avatarPath = '/avatar/h.jpg';
            break;
        case 'i':
            avatarPath = '/avatar/i.jpg';
            break;
        case 'j':
            avatarPath = '/avatar/j.jpg';
            break;
        case 'k':
            avatarPath = '/avatar/k.jpg';
            break;
        case 'l':
            avatarPath = '/avatar/l.jpg';
            break;
        case 'm':
            avatarPath = '/avatar/m.jpg';
            break;
        case 'n':
            avatarPath = '/avatar/n.jpg';
            break;
        case 'o':
            avatarPath = '/avatar/o.jpg';
            break;
        case 'p':
            avatarPath = '/avatar/p.jpg';
            break;
        case 'q':
            avatarPath = '/avatar/q.jpg';
            break;
        case 'r':
            avatarPath = '/avatar/r.jpg';
            break;
        case 's':
            avatarPath = '/avatar/s.jpg';
            break;
        case 't':
            avatarPath = '/avatar/t.jpg';
            break;
        case 'u':
            avatarPath = '/avatar/u.jpg';
            break;
        case 'v':
            avatarPath = '/avatar/v.jpg';
            break;
        case 'w':
            avatarPath = '/avatar/w.png';
            break;
        case 'x':
            avatarPath = '/avatar/x.jpg';
            break;
        case 'y':
            avatarPath = '/avatar/y.jpg';
            break;
        case 'z':
            avatarPath = '/avatar/z.png';
            break;
        default:
            avatarPath = '/avatar/z.png';
    }
    return avatarPath;
}


