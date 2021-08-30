import { GithubLink } from '../components/GithubLink';

export default function Home() {
  const discordLink = 'https://discord.gg/zxt2KaqAjC';
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-secondary">
      <div className="flex flex-col items-center">
        <img src="gp-devs.png" alt="GP Devs" className="mb-10" />
        <h2 className="text-3xl font-bold mb-4">Join our Discord!</h2>
        <a className="text-xl font-bold transition duration-200 hover:text-primary" href={discordLink}>
          {discordLink}
        </a>
      </div>
      <GithubLink />
    </div>
  );
}
