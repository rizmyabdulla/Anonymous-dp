# Anonymous-dp

## Anonymous-dp Intergration via CDN

import javascript code via : https://cdn.jsdelivr.net/gh/RizmyAbdulla/Anonymous-dp@main/index.js

```
<script src="https://cdn.jsdelivr.net/gh/RizmyAbdulla/Anonymous-dp@main/index.js"></script>
```

## Live Preview

Live preview available on : https://rizmyabdulla.github.io/Anonymous-dp/

## Using Anonymous-dp in HTML webpage

create `canvas` element with id `profile-picture` with `width` 200 and `height` 200

```
<canvas id="profile-picture" width="200" height="200"></canvas>
```

you can save profile image by a creating a `button` Element with id `save-dp`

```
<button id="download-dp">Download dp</button>
```

if you want to generate DP with a button Element,use id `generate-dp`.

```
<button id="generate-dp">Generate dp</button>
```

if you want to submit this Profile picture in `form`, use class name `submit-dp` to a `input` button type Element.

```
<form action="post">
   <input type="button" class="submit-dp" value="Submit" />
</form>
```

