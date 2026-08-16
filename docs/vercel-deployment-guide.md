# Vercel Deployment Guide

## Verified state

- Local `main` and `origin/main` were both at commit `7c51e03` before the resume update.
- The redesign is present in `ariefshecter/my-portfolio` and uses Next.js 16.3.1.
- The live domain still serves the previous Create React App build. It returns the title `My
  Portfolio`, a `#14b8a6` theme colour, and an empty `<div id="root"></div>` shell.
- The live deployment predates the pushed redesign. Vercel has therefore not built the current
  GitHub `main` branch for this domain.
- The application needs no environment variables and no `vercel.json`.

Do not create a second Vercel project. Reuse the project that owns
`my-portfolio-eta-ten-60.vercel.app` so portfolio and resume links remain stable.

## 1. Finalize version control

Run these checks from the portfolio repository:

```bash
cd /home/riefzy/Project/my-portfolio-main
git status --short --branch
git diff --check
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Review only the intended resume and documentation changes:

```bash
git diff -- README.md content/projects.ts tests/site-header.test.tsx docs/resume-full-stack.html docs/github-sync-checklist.md docs/vercel-deployment-guide.md
git status --short
```

Commit the generated resume files and sources together:

```bash
git add README.md content/projects.ts tests/site-header.test.tsx docs/resume-full-stack.html docs/github-sync-checklist.md docs/vercel-deployment-guide.md public/assets/resume/resume.pdf public/assets/resume/Ferry-Khusnil-Arief-Full-Stack-Developer.docx
git commit -m "docs: update full stack resume and deployment guides"
git push origin main
```

Record the pushed revision for deployment verification:

```bash
git rev-parse HEAD
git status --short --branch
```

Expected result: the status is clean and `main` is not ahead of `origin/main`.

## 2. Repair the Vercel Git connection

1. Sign in at <https://vercel.com/dashboard>.
2. Open the project whose domain is `my-portfolio-eta-ten-60.vercel.app`.
3. Open **Settings > Git**.
4. Confirm **Connected Git Repository** is `ariefshecter/my-portfolio`.
5. Confirm **Production Branch** is `main`.
6. If another repository is connected, disconnect it and connect `ariefshecter/my-portfolio`.
7. If no repository is connected, select **Connect Git Repository** and authorize Vercel to access
   `ariefshecter/my-portfolio`.
8. Open **Settings > General** and set **Framework Preset** to `Next.js`.
9. Leave **Root Directory** as `.` because `package.json` is at repository root.
10. Leave **Build Command**, **Output Directory**, and **Install Command** overridden fields empty.
    Vercel should detect `next build` and manage `.next` itself.
11. Do not add environment variables; the current application does not require any.

## 3. Start the production deployment

If reconnecting Git starts a deployment automatically, open that deployment. Otherwise:

1. Open the project **Deployments** tab.
2. Find the deployment for the final commit recorded above.
3. Select **Redeploy** and leave **Use existing Build Cache** disabled for this first migration from
   CRA to Next.js.
4. Confirm the deployment target is **Production**.
5. Wait for the build to finish and confirm the deployment source shows the expected commit SHA.

The build log should identify Next.js, compile successfully, and generate `/`, `/about`, `/work`,
three `/work/[slug]` pages, `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest`.

## 4. Verify before promoting the URL

Open the production domain in a private browser window and verify the home, work, case-study,
about, and resume pages. Then run:

```bash
curl -fsS "https://my-portfolio-eta-ten-60.vercel.app" | grep -F "Ferry Khusnil Arief"
curl -fsS "https://my-portfolio-eta-ten-60.vercel.app/robots.txt"
curl -fsS "https://my-portfolio-eta-ten-60.vercel.app/sitemap.xml"
curl -sS -o /dev/null -w '%{http_code}\n' "https://my-portfolio-eta-ten-60.vercel.app/work/sistem-rapor"
curl -sS -o /dev/null -w '%{http_code}\n' "https://my-portfolio-eta-ten-60.vercel.app/assets/resume/resume.pdf"
curl -sS -o /dev/null -w '%{http_code}\n' "https://my-portfolio-eta-ten-60.vercel.app/nonexistent-deployment-check"
```

Expected results:

- Home output contains `Ferry Khusnil Arief`, not the old empty CRA root.
- `robots.txt` references the canonical sitemap.
- `sitemap.xml` is XML, not an HTML fallback.
- Sistem Rapor and the resume return `200`.
- The nonexistent route returns `404`, not the old CRA soft `200`.

Confirm old CRA artifacts no longer resolve:

```bash
curl -sS -o /dev/null -w '%{http_code}\n' "https://my-portfolio-eta-ten-60.vercel.app/static/js/main.927b7d75.js"
curl -sS -o /dev/null -w '%{http_code}\n' "https://my-portfolio-eta-ten-60.vercel.app/manifest.json"
```

Both should return `404`; the new manifest is `/manifest.webmanifest`.

## 5. Rollback procedure

If production has a runtime or routing problem:

1. Open **Deployments** in the same Vercel project.
2. Select the last known working deployment.
3. Use **Promote to Production** to restore it without changing Git history.
4. Fix the problem in a new Git commit, rerun all four validation commands, and push normally.
5. Do not use `git reset --hard`, force-push, or delete the failed deployment; its logs are useful for
   diagnosis.

After the redesigned deployment passes every check, update GitHub profile fields and repository
homepages to promote the same canonical URL.
