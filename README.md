# Goal
I want to use a dynamic route (`/auth/[screen].tsx`) to display auth screens with different states (welcome, login, register, etc.).

In `app/_layout.tsx`, I would use an auth provider to route to the auth/welcome screen when not logged in (`router.replace('/auth/welcome');`).

# Problem

With every routing method I've tried (`router.replace`, `router.push`, `<Link href="/auth/login">`), `[screen].tsx` shows empty params.

However, if I try deep linking, either through:

1. `Linking.openURL('exp://localhost:8081/--/auth/welcome');`
2. `xcrun simctl openurl booted exp://localhost:8081/--/auth/register`

The route _does_ work as expected and shows the expected `screen` parameter.

I have tried clearing the cache and starting everything from scratch, etc., and the `_sitemap` shows:

- `auth/[screen].tsx`
- `+not-found.tsx`

What am I missing?
