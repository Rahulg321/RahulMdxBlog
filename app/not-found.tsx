export default function NotFound() {
  return (
    <section className="narrow-container block-space-mini flex min-h-screen flex-col items-center justify-center text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground">
            404
          </h1>
          <h2 className="text-xl font-medium tracking-tight text-muted-foreground">
            Page Not Found
          </h2>
        </div>

        <div className="max-w-md space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The page you're looking for doesn't exist or has been moved. Don't
            worry, these things happen to the best of us.
          </p>

          <div className="flex flex-col items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Go back home
            </a>

            <p className="text-xs text-muted-foreground">
              Found a broken link?{" "}
              <a
                href="mailto:rg5353070@gmail.com"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Let me know
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
