export function BlogContent({ content }: { content: string }) {
  const sections = content.split('\n\n').map(section => section.trim());
  
  return (
    <div className="space-y-8">
      {sections.map((section, index) => {
        // Handle headers
        if (section.startsWith('# ')) {
          return (
            <h1 key={index} className="text-4xl font-bold text-gray-900">
              {section.replace('# ', '')}
            </h1>
          );
        }
        
        if (section.startsWith('## ')) {
          return (
            <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12">
              {section.replace('## ', '')}
            </h2>
          );
        }
        
        if (section.startsWith('### ')) {
          return (
            <h3 key={index} className="text-2xl font-semibold text-gray-900 mt-8">
              {section.replace('### ', '')}
            </h3>
          );
        }
        
        // Handle lists
        if (section.includes('\n- ')) {
          const [listTitle, ...items] = section.split('\n- ');
          return (
            <div key={index} className="space-y-4">
              {listTitle && <p className="text-gray-600">{listTitle}</p>}
              <ul className="list-disc pl-6 space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="text-gray-600">{item.trim()}</li>
                ))}
              </ul>
            </div>
          );
        }
        
        // Regular paragraphs
        return (
          <p key={index} className="text-gray-600 leading-relaxed">
            {section}
          </p>
        );
      })}
    </div>
  );
} 