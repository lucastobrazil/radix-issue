# radix-issue

## Context
- We are trying to export `@radix-ui/react-avatar@0.0.6` from our design system library to use in our main project
- We use storybook (older version 3.4.6) 
- There are issues when building storybook with version 0.0.6 (see below). Version 0.0.5 is fine.
- Confirmed this isn't just for avatar, but also separator, checkbox etc.

## Issue
The below error happens when we try to build storybook, or if our main product tries to use the design system.

```
ERROR in ./node_modules/@radix-ui/react-separator/dist/index.module.js
Module parse failed: Unexpected token (1:414)
You may need an appropriate loader to handle this file type.
| import{Primitive as r}from"@radix-ui/react-primitive";
```

Worth nothing that our usual `build` script (it just calls `webpack`) runs fine, it's only when a) storybook tries to build and b) our main product tries to build.

Both cases return the same error.

We're running on Babel 6 and hoping to finish an upgrade soon, but given the previous version of Radix-UI componetns worked, it seems like Babel 6 shouldn't be a problemt.

Thanks as always for your hard work Modulz team!
