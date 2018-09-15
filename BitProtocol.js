function DomainBitProtocol(amount, bitCount){
	this.protocols = new Array(amount);
	this.bitCount = bitCount;
}

DomainBitProtocol.prototype.register = function(domainCode, protocol){
	this.protocols[domainCode] = protocol;
};

DomainBitProtocol.prototype.process = function(input){
	const index = input.readNumber(this.bitCount, false);
	if(index < this.protocols.length){//index can't be negative
		this.protocols[index].process(input);
	}
	else {
		throw 'invalid index: ' + index + ' (length is ' + this.protocols.length + ')';
	}
};