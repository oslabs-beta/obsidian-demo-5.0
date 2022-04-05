echo "Installing deno..."
curl -fsSL https://deno.land/x/install/install.sh | sh
export PATH="/opt/buildhome/.deno/bin:$PATH"
deno run --allow-net --allow-read --allow-env --unstable --no-check server.tsx
exit 0