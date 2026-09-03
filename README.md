# End of Term Notes — setup guide

A tiny 4-file site: student types their name, gets their personal
progress note. No server, no database — just static files, so
GitHub Pages hosts it for free.

## 1. Add your students

Open **students-data.js**. It's a plain list — copy one block per
student, fill in `name`, `progress`, and `message`. Full instructions
are in the comments at the top of that file. You do not need to
touch any other file to add all 40+ students.

## 2. Try it locally (optional)

Just double-click `index.html` to open it in a browser and test the
name lookup before publishing.

## 3. Publish with GitHub Pages

1. Create a new repository on GitHub (e.g. `class-term-notes`).
   Public repos get free Pages hosting; a private repo needs a paid
   plan for Pages.
2. Upload all 4 files (`index.html`, `style.css`, `script.js`,
   `students-data.js`) to the repository — drag-and-drop works fine
   on the GitHub website ("Add file" → "Upload files").
3. Go to the repo's **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a
   branch", branch **main**, folder **/(root)**. Save.
5. GitHub gives you a URL like
   `https://your-username.github.io/class-term-notes/` within a
   minute or two. Share that link with your class.

## Notes on privacy

- The page never lists student names anywhere in the visible UI —
  a student only sees a result if they type a name that matches
  exactly (ignoring case/spacing).
- That said, anyone who opens `students-data.js` directly (or views
  page source) could read every student's message, since it's a
  public static file. That's fine for most classroom uses, but if
  you want messages to be genuinely private, this simple approach
  isn't strong enough — you'd need a backend with per-student login,
  which is a bigger project. Happy to help with that version too if
  it matters for your case.

## Updating next term

Just edit `students-data.js` again and re-upload it (or edit it
directly in GitHub's web editor) — no other file needs to change.
