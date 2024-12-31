
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const { locale, push, asPath } = useRouter();

  const switchLanguage = (language) => {
    push(asPath, asPath, { locale: language });
  };

  return (
    <div>
      <button
        onClick={() => switchLanguage('en')}
        disabled={locale === 'en'}
      >
        English
      </button>
      <button
        onClick={() => switchLanguage('np')}
        disabled={locale === 'np'}
      >
        नेपाली
      </button>
    </div>
  );
};

export default LanguageSwitcher;
