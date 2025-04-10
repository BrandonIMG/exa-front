export default function StreamingPlayer(){
    var videoUrl = "https://mvs.daioncdn.net/exatv/exatv.m3u8?app=web";
	var bitrate = {};

	var src = {
		hls: videoUrl,
		daion:true
	};
	
	var playerSettings = {
		licenseKey: 'Kl8ldjU9Mjc5P3JvbTVkYXNpczMwZGIwQSVfKg==',
		src: src,
		autoplay: true,
		hlsJSFetchXhrWithCredentials:true,
		isLiveDvr: true,
		width:1280,
		ads: true,
		height:720,
	};

	var player = new RadiantMP("playerArea");
	var rmpContainer = document.getElementById("playerArea");


	var daion = new DaionJs(player,{
		hlsResolver: function(player){
			return player.getHlsJSInstance();
		},
		srcMethod: "setSrc",
		descriptionUrl:"https://exa.tv/",
		fullWindowMode: true,
		hasNativeFullscreenSupport:true,
		dfp:{
			playerType: "radiantMediaPlayer",
			playerVersion: "7.8",
			videoHeight: 1280,
			videoWidth: 720
		},
		ads:{
			overlay: {
				shrinkPercent:10,
				animate: true
			},
		     singleAdText: "Single Ad "
		},
		c2a: {
		  text: "Click for more information"
		}
	});

	var onAd = false;

        daion.on("daionAdClicked", function (e, data) {
			if(data.url)
			{
				var win = window.open(data.url, '_blank');

				win.focus();
			}
        });
		
	
	player.init(playerSettings);
    return(
        <div>
            <h2>Streaming</h2>
            <script src="https://cdn.radiantmediatechs.com/rmp/9.16.5/js/rmp.min.js"></script>
            <script src="https://daion-static.ercdn.net/sdk/radiant/daion-radiant-player.min.js"></script>
            <div id="playerArea" style="margin:0 auto;"></div>  
        </div>
    )
}