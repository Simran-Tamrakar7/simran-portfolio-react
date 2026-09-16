"""Official CV PDF sync.

The downloadable CV is the real uploaded resume:
  public/SimranTamrakar.pdf

Do NOT regenerate a stub PDF. When the official CV file is replaced,
run this script to mirror it for legacy links.
"""

from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
OFFICIAL = ROOT / "public" / "SimranTamrakar.pdf"
LEGACY = ROOT / "public" / "Simran_Tamrakar_QA_CV.pdf"


def main():
    if not OFFICIAL.exists():
        raise SystemExit(f"Missing official CV: {OFFICIAL}")
    shutil.copyfile(OFFICIAL, LEGACY)
    print(f"Synced {OFFICIAL.name} -> {LEGACY.name} ({OFFICIAL.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
