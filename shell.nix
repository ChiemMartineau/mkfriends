let
  pkgs = import <nixpkgs> { };
in
pkgs.mkShell {
  packages = with pkgs; [
    python3
    uv
    nodejs
    auth0-cli
  ];
}
