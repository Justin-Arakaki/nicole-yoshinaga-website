interface Link {
  // id: string;
  href: string;
  src: string;
}

export default function getGoogleDriveLinks(rawUrlList: string): Link[] {
  if (!rawUrlList) return [];
  const urls = rawUrlList.split(', ');
  const links: Link[] = [];
  const regex = /\/d\/([^/]+)/;

  for (const url of urls) {
    const match = url.match(regex);
    if (!match) continue;
    links.push({
      // id: match[1],
      href: url,
      src: 'https://drive.google.com/uc?id=' + match[1]
    });
  }

  return links;
}
