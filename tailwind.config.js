module.exports = {
  content: ["./*.html"],
  corePlugins: {
    preflight: false,
  },
  // Tailwind scans the markup for class names, so Bootstrap classes that happen
  // to share a name with a Tailwind utility get emitted as that utility. This
  // file is loaded after bootstrap.min.css and styles.css, so the utility wins.
  // `collapse` is the damaging one: Bootstrap uses it for accordion panels, but
  // Tailwind's `collapse` means `visibility: collapse`, which blanks the panel
  // contents the moment the expand transition finishes.
  // `resize` is a false positive: the scanner matches the bare word in the
  // globe's resize listener, and no element ever carries the class.
  blocklist: ["collapse", "resize"],
  theme: {
    extend: {},
  },
  plugins: [],
}
