#!/usr/bin/env bash

# Approximate flow (in the truffle console):
# x = await identity.deployed()
# challenge = (await x.challenge(accounts[1])).logs[0].args.challenge
# response = await web3.eth.sign(challenge, accounts[1])
# await x.response(response)
# x.get_paired_address(accounts[0])

set -eu

pkill node || true
ganache-cli &
truffle compile
truffle migrate
truffle console
