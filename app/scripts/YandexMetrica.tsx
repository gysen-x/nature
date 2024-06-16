/* eslint-disable @next/next/no-img-element */
import Script from 'next/script'

export function YandexMetrica() {
	// { ymId }: { ymId: string | undefined }
	const ymId = process.env.YANDEX_METRIKA_ID
	console.log('ymId: ', ymId)
	return (
		<>
			<Script
				async
				defer
				id='yandex-metrica'
				dangerouslySetInnerHTML={{
					__html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${ymId}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
              `
				}}
			/>
			<noscript>
				<div>
					<img
						src={`https://mc.yandex.ru/watch/${ymId}`}
						style={{
							position: 'absolute',
							left: '-9999px'
						}}
						alt=''
					/>
				</div>
			</noscript>
		</>
	)
}