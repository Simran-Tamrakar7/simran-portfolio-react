"""Keep the official CV PDF in sync.

Official file: public/SimranTamrakar.pdf
(Also mirrored as public/Simran_Tamrakar_QA_CV.pdf for old links.)

Do not regenerate a stub PDF — replace SimranTamrakar.pdf with the
exported resume when the CV changes.
"""

from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
OFFICIAL = ROOT / 'public' / 'SimranTamrakar.pdf'
LEGACY = ROOT / 'public' / 'Simran_Tamrakar_QA_CV.pdf'


def main():
    if not OFFICIAL.exists():
        raise SystemExit(f'Missing official CV: {OFFICIAL}')
    shutil.copyfile(OFFICIAL, LEGACY)
    print(f'Synced {OFFICIAL.name} -> {LEGACY.name} ({OFFICIAL.stat().st_size} bytes)')


if __name__ == '__main__':
    main()
