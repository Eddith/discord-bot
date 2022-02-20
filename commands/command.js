module.exports = {
  name: "poseidon",
  description: "Poseidon!",
  execute(message, args, Discord) {
      const newEmbed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("New Video")
        .setURL("https://www.youtube.com/watch?v=G2mJMaN0KS0")
        .setDescription('Yeni Video Eklendi')
        .addFields(
          { name: 'Yapımcı', value: 'POSEİDON', inline: true },
          { name: 'Yapım Tarihi', value: '19.02.2022', inline: true },
          { name: 'Yapım Saati', value: '09:00', inline: true },
        )
        .setImage('https://cdn.discordapp.com/attachments/790923721300770817/945041232298663946/aliab1200vp.jpg')
        .setFooter({ text: 'Bir dünya markası', iconURL: 'https://yt3.ggpht.com/npez9yqyEDBxJdeNRnBV7CUFR81426EUEWm1qh82yewVS7VFphQ_i2ix3apm1zzwzn47o6QEyw=s88-c-k-c0x00ffffff-no-rj' });
      
      message.channel.send({ embeds: [newEmbed] });
  }
};
