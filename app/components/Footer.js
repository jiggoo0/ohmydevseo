export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 p-4 text-center text-sm text-gray-600 dark:text-gray-400">
      &copy; {new Date().getFullYear()} TKX Shop. All rights reserved.
    </footer>
  );
}