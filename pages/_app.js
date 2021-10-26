import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
