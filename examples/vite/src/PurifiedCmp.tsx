/** @jsxImportSource jsx-purify/react */

export function PurifiedCmp() {
  return (
    <>
      Test
      <img src="nonsense" alt="nonsense" onError={() => alert('Harmful code executed (onerror)')} />
      <script defer async>
        {`
        alert('Harmful code executed (script)');
        `}
      </script>
      <style>
        {`
        body {
          background-color: crimson;
        }
        `}
      </style>
    </>
  );
}
