function simplifyPath(path: string): string {
  let dirs = [""];
  let dir = "";
  let flag = false;
  for (let c of path) {
    if (flag === false) {
      if (c !== "/") {
        dir = c;
        flag = true;
      }
    } else {
      if (c !== "/") dir += c;
      else {
        if (dir === "..") {
          if (dirs.length > 1) dirs.pop();
        }
        else if (dir !== ".") dirs.push(dir);
        flag = false;
      }
    }
  }
  if (flag === true) {
    if (dir === "..") {
      if (dirs.length > 1) dirs.pop();
    }
    else if (dir !== ".") dirs.push(dir);
    flag = false;
  }
  if (dirs.length === 1) return "/";
  else return dirs.join("/")
};