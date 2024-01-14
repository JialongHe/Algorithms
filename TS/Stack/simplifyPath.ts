// 71. Simplify Path
// https://leetcode.com/problems/simplify-path/description/

// Stack
function simplifyPath2(path: string): string {
    let stack: string[] = [];
    let res: string = "";

    for (let i: number = 0; i < path.length; i++) {
        if (path[i] === '/') {
            continue;
        }
        let temp: string = "";
        while (i < path.length && path[i] !== '/') {
            temp += path[i];
            i++;
        }
        if (temp === ".") {
            continue;
        }
        if (temp === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(temp);
        }
    }

    for (let i: number = 0; i < stack.length; i++) {
        res += "/" + stack[i];
    }

    if (res.length === 0)   return "/";
    return res;
};

// Solution 2, Improved Time & Space
function simplifyPath(path: string): string {
    let dirs: string[] = path.split("/").filter((s: string) => {
        return s !== "";
    });

    let stack: string[] = [];

    for (let dir of dirs) {
        if (dir === ".") {
            continue;
        }
        if (dir === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(dir);
        }
    }

    return "/" + stack.join("/");
};

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo/'));