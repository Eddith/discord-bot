module.exports = {
  name: "youtube",
  description: "Youtube!",
  execute(message, args) {
    if (message.member.roles.cache.has("826829624612749355")) {
      message.channel.send(
        "https://www.youtube.com/channel/UCxRecose6C_Snoag8zwyCYg"
      );
    } else {
      message.channel.send(
        "Knk Malesef Kurucu Olmayanlar Youtube Linkini Görmezden Gelir."
      );
    }
  },
};
