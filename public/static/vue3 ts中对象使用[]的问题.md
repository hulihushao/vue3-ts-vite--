
---
**例如**
<br>
```ts
let a={
    b:"1"
}
let c="b"
```
当使用a[c]的时候ts会提示错误，此时为避免错误，通常采用a[c as keyof typeof a]这种方式